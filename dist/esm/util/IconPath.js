// import icon from '../assets/icons'
function importAllIcons() {
  var icons = {};
  var requireIcon = require.context('../assets/icons',
  // 图标文件所在的路径（相对于当前文件）
  true,
  // 是否遍历子目录
  /\.(svg|png|jpe?g)$/ // 文件类型匹配规则
  );

  requireIcon.keys().forEach(function (filename) {
    var iconName = filename.replace(/^\.\//, '').replace(/\.(svg|png|jpe?g)$/, '');
    var str = requireIcon(filename);
    if (str.split('/').length > 3) {
      str = str.split('/');
      str.splice(0, 2);
      str = '/' + str.join('/');
    }
    // console.log(str);
    icons[iconName] = 'https://raw.githubusercontent.com/swown6/ti-lin-react/gh-pages/gh-pages' + str;
  });
  return icons;
}
var icons = importAllIcons();
export default icons;