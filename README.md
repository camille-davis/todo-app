# Todo List

## Dev Setup

Install packages:
```
composer install
npm install
```

Create .env and set variables.

Make sure Docker Desktop is installed then start containers:
```
./vendor/bin/sail up
```

Generate app key:
```
./vendor/bin/sail artisan key:generate
```

Migrate DB:
```
./vendor/bin/sail artisan migrate
```

## After editing assets

```
npm run build
```
