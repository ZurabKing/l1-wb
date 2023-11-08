fetch(
  "https://api.vk.com/method/wall.get?count=100&domain=koshki2010&v=5.131&access_token=vk1.a.zghDbPpoAX9PtbbtPpKUhRK-HC-v4WPdM3x0GZK52z7Kwuq0N6HD0w2ndAbqkh22m3JJYbMFWPU9P5VFC5HD75Ozq2gjXUQRPVhyQMEnsmROOJZmyVq9WLZGzKOCt4Uig143h8jHWsn5ccuxkisjz8Z2q5b8DVAYshoqbP5_du-qSyacCWzt3MjTUzek5zyW8ODAxdo8D2STZUuLKt76Bg"
)
  .then((res) => res.json())
  .then(console.log);
