import axios from "axios";
import { loginByUsername } from "./loginByUsername";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk";
import { userActions } from "entities/User";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("services/loginByUsername", () => {
  const userData = { username: "admin", id: "1" };

  test("fulfilled", async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));

    const asyncThunk = new TestAsyncThunk(loginByUsername);
    const result = await asyncThunk.callThunk({ username: "admin", password: "123" });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(asyncThunk.dispatch).toHaveBeenCalledWith(userActions.setUserData(userData));
    expect(asyncThunk.dispatch).toHaveBeenCalledTimes(3);
    expect(result.payload).toEqual(userData);
  });

  test("error login", async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 404 }));

    const asyncThunk = new TestAsyncThunk(loginByUsername);
    const result = await asyncThunk.callThunk({ username: "344", password: "3" });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(asyncThunk.dispatch).not.toHaveBeenCalledWith(userActions.setUserData(userData));
    expect(asyncThunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toBe("error");
  });
});