rm -rf build &&
yarn build &&
cd build &&
git init &&
git add . &&
git commit -m "update" &&
#git branch -M main &&
git remote add origin git@gitee.com:wen_yue_wang/doraemon-picture-bed.git &&
git push -u origin master &&
#git remote add origin git@github.com:Amayw/DoraemonPictureBed.git &&
#git push -f -u origin main &&
cd -