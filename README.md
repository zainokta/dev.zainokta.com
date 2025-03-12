# zainokta.com
My Personal Website Portfolio

# building image
```shell
docker buildx build --platform linux/arm64 -t personal:latest --output type=docker,dest=personal.tar .
```

# loading image
``` shell
docker load -i /mnt/hdd/personal.tar
```

# running image
``` shell
docker run -d -p 3000:3000 -t personal
```