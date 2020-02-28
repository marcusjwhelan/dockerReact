## Design Requirements
* Specifies External System Behavior
* Specifies Constraints on the implementation
* Allows for easy modification
* Serves as a reference tool for system maintainers
* Record forethought about the lifecycle of the system
* Characterizes acceptable responses to undesired events

## Requirements Specification Document Structure
* <a href="#overview-of-system-goals">Overview of system Goals</a>
* <a href="#operating0-and-development-environments">Operating and development environments</a>
* <a href="#external-interfaces-and-data-flow">External interfaces and data flow</a>
* <a href="#functional-requirements">Functional requirements</a>
* <a href="#performance-requirements">Performance requirements</a>
* <a href="#exception-handling">Exception handling</a>
* <a href="#implementation-handling">Implementation handling</a>
* <a href="#foreseeable-modifications">Foreseeable modifications</a>
* <a href="#design-Suggestions">Design Suggestions</a>



## Overview of system Goals
Application to host game data for users to view along with company projects and api routes for \
AI models. 
 
## Operating and development environments
* Windows dev environment using PlasticSCM for version control at \
`C:\PlasticSCM\httpdocs\yourFileHere.php`, and viewable at \
`localhost/yourfileHere.php`. 
* Using localhost for development through remote server access via httpdocs on \
on local machine.
 
## External interfaces and data flow
* Python-AI flask integration
* C# VR-unity game integration

## Functional requirements
PHP back-end to serve users information pertaining to their game/user information.
And access control for user Authentication to user data and other company offerings
such as the AI api, other games, and projects. Each API route should integrate with 
external flask api connected to serve a model. Each game section should have
an area to view that games data.

## Performance requirements
NA

## Exception handling
NA

## Implementation handling
NA

## Foreseeable modifications
Contingent on current state: More robust routing and authentication methods.

## Design Suggestions
Possible selection on home page to which game you own and are playing to view
that games specific data. This will require different views per game. Along with
different database integrations per game and different authentication? 


# Development

### Setting up autoload
Make sure and start up the php default web server
```bash
php -S localhost:8080 -t public/
```
EX: App is a namespace in `/src` that has class elements internally.
```json
"autoload": {
    "psr-4": {
        "App\\": "app/"
    }
},
```
Now to generate the autoloading files in `/vendor/composer`
using the `/vendor/autoload.php` file         
```bash
composer dump-autoload -o
```             
Example of the namespace file `/src/HelloWorld.php`
```php
class HelloWorld
    {
        public function announce(): void
        {
            echo 'Hello, autoloaded world!';
        }
    }
```
Example of the file autoloading that file in `/public/index.php`
```php
<?php
declare(strict_types=1);

use ExampleApp\HelloWorld;

require_once dirname(__DIR__) . '/vendor/autoload.php';

$helloWorld = new HelloWorld();
$helloWorld->announce();
```                      
Added Dependency Injection Container
```bash
composer require php-di/php-di
```                               
Installing Relay as a PSR-15 Dispatcher
And since the PSR-15 middleware spec requires implementations to pass along PSR-7
compatible HTTP messages, we'll use Zend Diactoros as our PSR-7 implementation.
```bash
composer require zendframework/zend-diactoros
```
Now let's add the FastRoute and request handler middleware.
(FastRoute determines if a request is valid and can actually 
be handled by the application, and the request handler sends 
Request to the handler configured for that route in the routes 
definition.)
```bash
composer require middlewares/fast-route middlewares/request-handler
```
