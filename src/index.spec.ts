import { renderHook, cleanup, act } from "react-hooks-testing-library";
import useReadingProgress from ".";

describe("hook", () => {
  afterEach(cleanup);

  it("should return the percentage that the page has been scrolled by", () => {
    const { result } = renderHook(() => useReadingProgress());

    Object.defineProperty(document.body, "clientHeight", {
      value: 5000,
      writable: true
    });
    Object.defineProperty(document.documentElement, "clientHeight", {
      value: 1000,
      writable: true
    });
    Object.defineProperty(window, "scrollY", {
      value: 800,
      writable: true
    });

    act(() => {
      window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current).toEqual(20);
  });
});
