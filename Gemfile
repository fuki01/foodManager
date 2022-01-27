source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.0.2'

gem 'bootsnap', '>= 1.4.4', require: false
gem 'devise'
gem 'image_processing', '~> 1.2'
gem 'jbuilder', '~> 2.7'
gem 'puma', '~> 5.0'
gem 'rails', '~> 6.1.4', '>= 6.1.4.4'
gem 'sass-rails', '>= 6'
gem 'semantic-ui-sass'
gem 'turbolinks', '~> 5'
gem 'webpacker', '~> 5.0'

gem 'activestorage-cloudinary-service'
gem 'cloudinary', require: false

group :development, :test do
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
end

group :development do
  # n+1問題を検知するためのgem
  gem 'bullet'
  gem 'listen', '~> 3.3'
  gem 'rack-mini-profiler', '~> 2.0'
  gem 'rubocop', require: false
  gem 'rubocop-performance', require: false
  gem 'rubocop-rails', require: false
  gem 'spring'
  gem 'sqlite3', '~> 1.4'
  gem 'web-console', '>= 4.1.0'
end

group :production do
  gem 'pg', '1.1'
end

gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
