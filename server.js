import express from "express";
const app = express();
const PORT = 3000;


app.get("/", (req, res) => {
    res.send("Конфиренция РФ");
});

app.use(express.urlencoded({ extended: true }));


app.get('/register', (req, res) => {
  res.send(`
    <form method="POST" action="/register">
      <input name="login" placeholder="Логин">
      <input name="password" type="password" placeholder="Пароль">
      <button type="submit">Создать пользователя</button>
      <button type="reset">Очистить форму</button>
    </form>
  `);
});

app.post('/register', (req, res) => {
  const login = req.body?.login;
  if (!login) {
    return res.status(400).send('Поле login обязательно');
  }
  res.send(`Пользователь ${login} зарегистрирован`);
});




app.get('/about', (req, res) => {
    res.send('<h1>O портале</h1><p>Добро пожаловать на наш информационный портал.</p>');
});

app.get('/contact', (req, res) => {
    res.send('<h1>Контакты</h1><p>Email:info@example.com | Телефон:+7 (495) 000-00-00</p>');
});

app.get('/help', (req, res) => {
    res.send('<h1>Помощь</h1><p>Раздел находится в разработке</p>');
});

app.get('/rooms', (req, res) => {
    res.send('<h1>Список помещений</h1><ul><li>Конференц-зал <<Альфа>></li><li>Переговорная <<Бета>></li></ul>');
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
