export type Response<T> =
  | {
      code: 200;
      json: T;
    }
  | {
      code: 403;
    }
  | {
      code: 500;
    };

export const authenticate = (username: string, password: string) => {
  return new Promise<Response<{ token: string }>>((resolve, reject) => {
    setTimeout(() => {
      const now = Date.now();

      if (now % 1000000 === 0) {
        reject(new Error(`Could not connect to the server.`));
        return;
      }

      if (Date.now() % 100 === 0) {
        resolve({ code: 500 });
        return;
      }

      if (username === "username" && password === "password") {
        resolve({ code: 200, json: { token: "token" } });
        return;
      }

      resolve({ code: 403 });
    }, 100);
  });
};

export const getNumberOfTasks = (token: string) => {
  return new Promise<Response<{ numberOfTasks: number }>>((resolve, reject) => {
    setTimeout(() => {
      const now = Date.now();

      if (now % 1000000 === 0) {
        reject(new Error(`Could not connect to the server.`));
        return;
      }

      if (now % 10000 === 0) {
        resolve({ code: 500 });
        return;
      }

      if (token !== "token") {
        resolve({ code: 403 });
        return;
      }

      resolve({ code: 200, json: { numberOfTasks: 20 } });
    }, 1000);
  });
};
