boostrap:
	@echo "Bootstrapping guard-demo..."
	yarn
	cd node_modules/nestjs-rate-limiter && npm i && npm run build

s start:
	yarn start:dev