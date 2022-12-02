update:
	@echo [1/2] building
	@ssh mohsen@37.32.23.160 'cd /opt/finca-parent && git checkout . && git pull && npm run build'
	
	@echo [2/2] restart service
	@ssh mohsen@37.32.23.160 'pm2 restart finca-parent'
	
upload:
	@echo [1/2] building
	@ssh mohsen@37.32.23.160 'cd /opt/finca-parent && git checkout . &&  git pull && npm ci && npm run build'
	
	@echo [2/2] restart service
	@ssh mohsen@37.32.23.160 'pm2 restart finca-parent'
	