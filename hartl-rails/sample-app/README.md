# Ruby on Rails Tutorial Sample Application

This is a sample application for 
[*Ruby on Rails Tutorial:
Learn Web Development with Rails*] (http://www.railstutorial.org/)
by [Micheal Hartl] (http://michaelhartl.com/)

## License

All source code in the [Ruby on Rails](http://railstutorial.org)
is available jointly under the MIT license and the Beerware license. See 
[LICENSE.md] (LICENSE.md) for details.

## Getting started

To get start, clone the repo and install the needed gems.

```
$ bundle install --without production
```

Next, migrate the database:

```
$ rails db:migrate
```

Finally, run the test suite to verify that everything is working correctly:

```
$ rails test
```

If the test suite passes, you'll be ready to run the app in a public serverL

```
$ rails server
```

For more information see the
[*Ruby on Rails tutorial* book](http://www.railstutorial.org/book).