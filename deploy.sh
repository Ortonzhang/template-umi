# 获取当前文件夹
project_name=${PWD##*/}

# release地址
releaseGit='git@gitlab.mljr.com:FEWeb-release-group/'${project_name}'.git'

# 当前分支名
branch='git rev-parse --abbrev-ref HEAD'

if [ "$branch" == 'master' ]

then

  npm run build

  test ! -d dist/${project_name} && echo 'no dist/'${project_name}' directory' && exit

  cd ./dist

  test -d ${project_name}-release && rm -rf  ${project_name}-release

  git clone $releaseGit ${project_name}-release && rm -rf ${project_name}-release/*

  cp -R ${project_name}/* ${project_name}-release/

  cd ${project_name}-release

  git add . && git commit -m 'Auto-commit' && git push
  
  # tag
  git tag 'www/'$(date +"%Y-%m-%d.%H%M") && git push --tags
else
  echo 'please merge to master!'
fi

