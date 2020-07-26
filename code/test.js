function run(genFn) {
  return new Promise((resolve, reject) => {
    const gen = genFn();
    function step(nextFn) {
      let next;
      try {
        next = nextFn();
      } catch (error) {
        reject(error);
      }
      if (next.done) {
        resolve(next.value);
      }
      Promise.resolve(next.value).then(
        res => step(() => gen.next(res)),
        err => gen.throw(new Error(err))
      );
    }
    step(() => gen.next(undefined));
  });
}
