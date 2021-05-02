const getSprint = require("../index");

describe("getSprint tests", () => {
  test("get sprint number of given date, with sprint of 2 weeks of first sprint", () => {
    const sprint = getSprint(new Date("2021-01-05"));

    expect(sprint).toBe("21_02");
  });

  test("get sprint number of given date, with sprint of 2 weeks with date of middle of year", () => {
    const sprint = getSprint(new Date("2021-05-16"), "PROJECT");

    expect(sprint).toBe("PROJECT_21_10");
  });

  test("get sprint number of given date, with sprint of 3 weeks with date of middle of wear", () => {
    const sprint = getSprint(new Date("2021-05-16"), "PROJECT", 3);

    expect(sprint).toBe("PROJECT_21_06");
  });

  test("get sprint with diferent separator", () => {
    const sprint = getSprint(new Date("2021-01-10"), "PROJECT", 1, "-");

    expect(sprint).toBe("PROJECT-21-01");
  });
});
