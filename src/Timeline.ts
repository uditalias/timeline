const isDefined = (predicate: any): boolean => typeof predicate !== "undefined";

const echo = <T>(item: T): T => item;

const throwIfNot = (condition: boolean, withMessage: string) => {
  if (!condition) {
    throw new Error(withMessage);
  }
};

const defaults = <T>(config: ITimelineConfig<T> = {}): ITimelineConfig<T> => {
  return Object.assign<ITimelineConfig<T>, Partial<ITimelineConfig<T>>>(
    {
      size: Infinity,
      cloneFn: echo
    },
    config
  );
};

export interface ITimelineConfig<T = any> {
  size?: number;
  cloneFn?: (item: T) => T;
  present?: T;
}

export default class Timeline<T = any> {
  private _config: ITimelineConfig<T>;
  private _past: T[];
  private _future: T[];
  private _present: T;

  constructor(config?: ITimelineConfig<T>) {
    throwIfNot(
      this instanceof Timeline,
      `Timeline is a constructor, use the 'new' keyword to create an instance`
    );

    this._past = new Array();
    this._future = new Array();
    this._config = defaults<T>(config);

    const { present } = this._config;

    if (present) {
      this.setPresent(present);
    }
  }

  public get hasPast(): boolean {
    return this._past.length > 0;
  }

  public get hasFuture(): boolean {
    return this._future.length > 0;
  }

  public get present(): T {
    return this._present;
  }

  public setPresent(present: T) {
    this._moveForward(this._config.cloneFn(present));

    this._future.length = 0;
  }

  public undo(): T | null {
    const nextPresent = this._past.pop();

    if (isDefined(nextPresent)) {
      this._moveBackward(nextPresent);

      return nextPresent;
    }

    return null;
  }

  public redo(): T | null {
    const nextPresent = this._future.shift();

    if (isDefined(nextPresent)) {
      this._moveForward(nextPresent);

      return nextPresent;
    }

    return null;
  }

  public clear() {
    this._past.length = 0;
    this._future.length = 0;
  }

  private _moveForward(present: T) {
    if (isDefined(this._present)) {
      this._addToPast(this._present);
    }

    this._present = present;
  }

  private _moveBackward(preset: T) {
    if (isDefined(this._present)) {
      this._addToFuture(this._present);
    }

    this._present = preset;
  }

  private _addToPast(present: T) {
    this._past.push(present);

    if (this._past.length > this._config.size) {
      this._past.shift();
    }
  }

  private _addToFuture(preset: T) {
    this._future.unshift(preset);
  }
}
