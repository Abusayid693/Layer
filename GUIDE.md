
## anaconda-environment pip
1. https://stackoverflow.com/questions/41060382/using-pip-to-install-packages-to-anaconda-environment

## using conda to install 
1. conda activate venv_name
2. `conda install package-name`

## using pip to install 
1. conda activate venv_name
2. which -a pip (if not install pip `conda install pip`)
3. /Users/rehanchoudhury/anaconda3/envs/layer3/bin/pip install fastapi (select your env pip to install or else it will install it in global env)

## Docker compose rebuild
```sh
docker-compose build --no-cache [<service_name>..]
```

## React native

error: unable to attach DB

```sh
rm -rf ~/Library/Developer/Xcode/DerivedData/
pod deintegrate
pod update
yarn run ios

```