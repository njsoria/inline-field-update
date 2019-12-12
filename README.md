# Attempted Changes by Nate Soria

Extending this inline editing tool to be able to manipulate booleans and numbers.

# Original README
## Add inline update to your nova resources

This tool allows you to update a field of a resource in the index view (inline edit).

### Installation

You can install the package in to a Laravel app that uses [Nova](https://nova.laravel.com) via composer:

```bash
composer require wehaa/liveupdate
```

### Usage

```php
use Wehaa\Liveupdate\Liveupdate;

Liveupdate::make('Name')
```

