FROM ruby:3.0.2
RUN apt-get update && apt-get install -y nodejs --no-install-recommends && rm -rf /var/lib/apt/lists/*
RUN apt-get update && apt-get install -y postgresql-client --no-install-recommends && rm -rf /var/lib/apt/lists/*
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs

WORKDIR /foodMnager

ADD Gemfile /foodMnager/Gemfile
ADD Gemfile.lock /foodMnager/Gemfile.lock

RUN gem install bundler
RUN bundle install

ADD . /foodMnager