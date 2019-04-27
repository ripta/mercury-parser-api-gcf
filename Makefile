
deploy:
	gcloud functions deploy mercuryParser --runtime nodejs10 --trigger-http --memory 128MB --timeout 10s --env-vars-file secrets.yaml
