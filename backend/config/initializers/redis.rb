REDIS = Redis.new(host: ENV['IS_DOCKER'] ? 'redis' : 'localhost')
