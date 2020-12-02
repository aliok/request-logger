build:
	docker build . -t request-logger

publish:
	docker build . -t docker.io/aliok/request-logger
	docker push docker.io/aliok/request-logger

