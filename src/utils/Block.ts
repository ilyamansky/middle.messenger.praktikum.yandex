import EventBus from "./EventBus";
import { v4 as makeUUID } from "uuid";

const enum Events {
  INIT = "init",
  FLOW_CDM = "flow:component-did-mount",
  FLOW_CDU = "flow:component-did-update",
  FLOW_RENDER = "flow:render",
}

type Props = Record<string, any>;

abstract class Block {
  tagName: string;
  props: Props;
  children: Record<string, any>;
  id: string;
  private _element: HTMLElement;
  eventBus: () => EventBus;

  public constructor(tagName = "div", propsAndChildren: Record<string, any> = {}) {
    const { children, props } = this._getChildren(propsAndChildren);
    this.children = children;
    const eventBus = new EventBus();
    this.eventBus = () => eventBus;
   
    this.tagName = tagName;
    this.props = this._makePropsProxy({ ...props, id: this.id });
    this.id = makeUUID();
    this._registerEvents(eventBus);
    eventBus.emit(Events.INIT);
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Events.INIT, this.init.bind(this));
    eventBus.on(Events.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Events.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Events.FLOW_RENDER, this._render.bind(this));
  }

  private _createResources() {
    this._element = this._createDocumentElement(this.tagName);
  }

  private init() {
    this._createResources();
    this.eventBus().emit(Events.FLOW_RENDER);
  }

  private _componentDidMount() {
    this.componentDidMount();
    Object.values(this.children).forEach((child) => {
      child.dispatchComponentDidMount();
    });
  }

  public componentDidMount() {}

  dispatchComponentDidMount() {
    this.eventBus().emit(Events.FLOW_CDM);
  }

  private _componentDidUpdate() {
    const response = this.componentDidUpdate();
    if (!response) {
      return;
    }
    this._render();
  }

  public componentDidUpdate() {
    return true;
  }

  setProps = (nextProps: Props) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element(): HTMLElement {
    return this._element;
  }

  private _render() {
    const fragment = this.render();
    const element = fragment.firstElementChild as HTMLElement;

    this._removeEventListeners();

    this._element.innerHTML = "";
    this._element.replaceWith(element);
    this._element = element;
    this._addEventListeners();
  }

  render(): DocumentFragment {
    return new DocumentFragment();
  }

  getContent(): HTMLElement {
    return this.element;
  }

  private _makePropsProxy(props: Props) {
    const proxyProps = new Proxy(props, {
  
      get(target, prop: string) {
        if (prop.startsWith("_")) {
          throw new Error("нет доступа");
        } else {
          const value = target[prop];
          return typeof value === "function" ? value.bind(target) : value;
        }
      },

      set(target, prop: string, value) {
        if (prop.startsWith("_")) {
          throw new Error("нет доступа");
        } else {
          target[prop] = value;
          this.eventBus().emit(Events.FLOW_CDU, target);
          return true;
        }
      },
      deleteProperty() {
        throw new Error("Нет доступа");
      },
    });

    return proxyProps;
  }

  private _createDocumentElement(tagName: string): HTMLElement {
    const element = document.createElement(tagName);
    return element;
  }

  show() {
    this.getContent().style.display = "block";
  }

  hide() {
    this.getContent().style.display = "none";
  }

  private _addEventListeners() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      this._element.addEventListener(eventName, events[eventName]);
    });
  }

  private _removeEventListeners() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      this._element.removeEventListener(eventName, events[eventName]);
    });
  }

  private _getChildren(propsAndChildren: Props) {
      const children: Record<string, Block> | any = {};
      const props: Props = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }

  protected compile(template, props: Props) {
    const propsAndStubs = { ...props };
    Object.entries(this.children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${child.id}"></div>`;
    });

    const fragment = this._createDocumentElement(
      "template"
    ) as HTMLTemplateElement;
    fragment.innerHTML = template(propsAndStubs);
    Object.values(this.children).forEach((child) => {
      const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);
      if (stub) stub.replaceWith(child.getContent());
    });

    return fragment.content;
  }
}

export default Block;
