# todo-pern

<!-- Postgres Heroku Addons -->

<!-- Create postgres -->

heroku addons:create heroku-postgresql:hobby-dev -a praava-pern-todo

<!-- Login to postgres -->

heroku pg:psql -a praava-pern-todo

<!-- Connect git with heroku -->

heroku git:remote -a praava-pern-todo

https://github.com/ousecTic/pern-deploy-tutorial
