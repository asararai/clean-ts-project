/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { assert, expect } from "chai";

export const createTestSuite = (testName: string, result:number) => {
  describe(testName, () => {
    it("should return the correct value", () => {
      assert.equal(result, 1);
    });
  });
}