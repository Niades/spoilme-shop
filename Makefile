start-frontend:
	cd ./services/spoilme-frontend && yarn start
start-backend:
	cd ./services/spoilme-backend && yarn start
dc-staging-up:
	docker-compose -f docker-compose.staging.yml up
dc-staging-down:
	docker-compose -f docker-compose.staging.yml down
dc-staging-build:
	docker-compose -f docker-compose.staging.yml build
dc-prod-up:
	docker-compose -f docker-compose.prod.yml up
dc-prod-down:
	docker-compose -f docker-compose.prod.yml down
dc-prod-build:
	docker-compose -f docker-compose.prod.yml build