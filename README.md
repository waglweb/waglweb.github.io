## Install rvm

~~~~
$ curl -sSL https://get.rvm.io | bash -s stable --ruby
~~~~


## Activate rvm

~~~~
$ source /usr/local/rvm/scripts/rvm
~~~~


## Build Jekyll site locally

~~~~
$ cd {PROJECT ROOT}
$ bundle install
~~~~


## Run dev server

~~~~
$ cd {PROJECT ROOT}
$ bundle exec jekyll serve --host=0.0.0.0
~~~~
