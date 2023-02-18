| HTTP Verb  | Route                  | Description                      | JSON |   |
|------------|------------------------|----------------------------------|------|---|
| GET        | `/drivers`             | List of all drivers              |      |   |
| GET        | `/drivers/{{year}}`    | List of all drivers of a year    |      |   |
| GET        | `/drivers/:id`         | Details of a driver              |      |   |
| GET        | `/users`               | List of users registered         |      |   |
| GET        | `/users/:id`           | Personal profile                 |      |   |
| GET        | `/circuits`            | Last season circuits             |      |   |
| GET        | `/team`                | Last season teams                |      |   |
| GET        | `/events/create`       | Add new event (admin)            |      |   |
| POST       | `/events/create`       | Add new event (admin)            |      |   |
| GET        | `/events/edit/:id`     | Edit an existing event (admin)   |      |   |
| POST       | `/events/edit/:id`     | Edit an existing event (admin)   |      |   |
| POST       | `/events/delete/:id`   | Delete an existing event (admin) |      |   |
| GET        | `/events`              | List of events                   |      |   |
| GET        | `/events/:id`          | Details of an event              |      |   |
| GET        | `/profile/edit/:id`    | Edit user profile (user/admin)   |      |   |
| POST       | `/profile/edit/:id`    | Edit user profile (user/admin)   |      |   |
| POST       | `/profile/delete/:id`  | Delete user Team (admin)         |      |   |
| GET        | `/profile/team-create` | Create user Team (user)          |      |   |
| POST       | `/profile/team-create` | Create user Team (user)          |      |   |
| GET        | `/profile/team-edit`   | Edit user team (user)            |      |   |
| POST       | `/profile/team-edit`   | Edit user team (user)            |      |   |
| GET        | `/api/`                | Paths we will use for chartJs    |      |✅ |