Yoga API

# Available Endpoints

* The base_url is `yoga-api.now.sh`.

* `/api/poses` will retrieve a list of available poses including image, sanskrit name, and english name.

* `/api/poses/:id` will retrieve a single pose based on its unique id.

* `/api/poses?name={name}` will retrieve a pose based on either it's english or sanskrit name.
