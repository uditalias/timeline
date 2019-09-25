import Timeline from "../src";

describe("Timeline", () => {
  describe("Module", () => {
    it("should be define", () => {
      expect(Timeline).toBeDefined();
    });

    it("should create new Timeline", () => {
      const timeline = new Timeline();

      expect(timeline).toBeDefined();
      expect(timeline).toBeInstanceOf(Timeline);
    });

    it("should throw when calling Timeline() constructor as function", () => {
      // @ts-ignore
      expect(() => Timeline()).toThrowError(
        `Timeline is a constructor, use the 'new' keyword to create an instance`
      );
    });
  });

  describe("Functionality", () => {
    let timeline: Timeline;

    beforeEach(() => {
      timeline = new Timeline();
    });

    it("should return the right present", () => {
      timeline.setPresent(1);

      expect(timeline.present).toBe(1);
    });

    it("should have past", () => {
      timeline.setPresent(1);
      timeline.setPresent(2);

      expect(timeline.hasPast).toBe(true);
    });

    it("should have future on undo", () => {
      timeline.setPresent(1);
      timeline.setPresent(2);

      timeline.undo();

      expect(timeline.hasFuture).toBe(true);
    });

    it("should return current present on undo", () => {
      timeline.setPresent(1);
      timeline.setPresent(2);

      expect(timeline.undo()).toBe(1);
    });

    it("should return current present on redo", () => {
      timeline.setPresent(1);
      timeline.setPresent(2);
      timeline.undo();

      expect(timeline.redo()).toBe(2);
    });

    it("should clear past and future", () => {
      timeline.setPresent(1);
      timeline.setPresent(2);
      timeline.setPresent(3);

      timeline.undo();

      expect(timeline.hasPast).toBe(true);
      expect(timeline.hasFuture).toBe(true);

      timeline.clear();

      expect(timeline.hasPast).toBe(false);
      expect(timeline.hasFuture).toBe(false);
    });

    it("should save only #size items", () => {
      timeline = new Timeline({ size: 3 });

      timeline.setPresent(1);
      timeline.setPresent(2);
      timeline.setPresent(3);
      timeline.setPresent(4);
      timeline.setPresent(5);

      expect(timeline.undo()).toBe(4);
      expect(timeline.undo()).toBe(3);
      expect(timeline.undo()).toBe(2);
      expect(timeline.undo()).toBe(null);
    });

    it("should redo only #size items", () => {
      timeline = new Timeline({ size: 3 });

      timeline.setPresent(1);
      timeline.setPresent(2);
      timeline.setPresent(3);
      timeline.setPresent(4);
      timeline.setPresent(5);

      timeline.undo();
      timeline.undo();
      timeline.undo();
      timeline.undo();

      expect(timeline.redo()).toBe(3);
      expect(timeline.redo()).toBe(4);
      expect(timeline.redo()).toBe(5);
      expect(timeline.redo()).toBe(null);
    });

    it("should clone the present on set", () => {
      const clone = jest.fn(item => {
        return { ...item };
      });

      timeline = new Timeline({
        cloneFn: clone
      });

      expect(clone).toHaveBeenCalledTimes(0);

      const present = { username: "udidu" };

      timeline.setPresent(present);

      expect(clone).toHaveBeenCalledTimes(1);

      expect(timeline.present).not.toBe(present);
    });

    it("should not clone the present on set", () => {
      const present = { username: "udidu" };

      timeline.setPresent(present);

      expect(timeline.present).toBe(present);
    });

    it("should clear the future on set present", () => {
      timeline.setPresent(1);
      timeline.setPresent(2);
      timeline.undo();

      expect(timeline.hasFuture).toBe(true);

      timeline.setPresent(3);

      expect(timeline.hasFuture).toBe(false);
    });

    it("should use present from config", () => {
      timeline = new Timeline({ present: 1 });

      expect(timeline.present).toBe(1);
    });
  });
});
