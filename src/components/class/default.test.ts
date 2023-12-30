import { classDefault } from "./default";
import { describe, it } from "node:test";
import assert from "node:assert";

/**
 * classDefault test.
 * @see https://nodejs.org/api/test.html
 */
describe("classDefault", (): void => {
  it("1. Return undefined when all parameters are undefined.", (): void => {
    const result: string | undefined = classDefault(
      undefined,
      undefined,
      undefined
    );

    assert.equal(result, undefined);
  });

  it("2. Return className when addClass and classDefault are undefined.", (): void => {
    const result: string | undefined = classDefault(
      "test-class",
      undefined,
      undefined
    );

    assert.equal(result, "test-class");
  });

  it("3. Return classDefault when className is `default` and addClass is undefined.", (): void => {
    const result: string | undefined = classDefault(
      "default",
      undefined,
      "default-class"
    );

    assert.equal(result, "default-class");
  });

  it("4. Return undefined when className is undefined and addClass is `default`.", (): void => {
    const result: string | undefined = classDefault(
      undefined,
      "default",
      "default-class"
    );

    assert.equal(result, "default");
  });

  it("5. Return addClass when className is undefined and addClass is not `default`.", (): void => {
    const result: string | undefined = classDefault(
      undefined,
      "test-class",
      "test-class"
    );

    assert.equal(result, "test-class");
  });

  it("6. Return classDefault when className is `default` and addClass is `default`.", (): void => {
    const result: string | undefined = classDefault(
      "default",
      "default",
      "default-class"
    );

    assert.equal(result, "default-class default");
  });
});
