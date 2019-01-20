#!/usr/bin/php
<?php
$fashopPath = '/var/www/project/project/fashop';
// 拉取fashop
if( !file_exists( $fashopPath ) ){
	shell_exec( "git clone https://github.com/mojisrc/fashop.git {$fashopPath}" );
} else{
	echo "mojisrc/fashop is exist\n";
}
// 判断默认数据库配置是否存在
if( !file_exists( "{$fashopPath}/Conf/config/database.php" ) ){
	$content = file_get_contents( "{$fashopPath}/Conf/config/database.default.php" );
	file_put_contents( "{$fashopPath}/Conf/config/database.php", str_replace( '127.0.0.1', 'mysql', $content ) );
	echo "mojisrc/fashop database init success\n";
} else{
	echo "mojisrc/fashop composer.lock is exist , no need exec\n";
}
// 判断是否需要执行composer
if( !file_exists( "{$fashopPath}/composer.lock" ) ){
	shell_exec( "cd {$fashopPath} && composer install && {$fashopPath} composer dump-autoload" );
	echo "mojisrc/fashop composer install success";
} else{
	echo "mojisrc/fashop composer.lock is exist , no need exec\n";
}
// 移动database.default 到database.php
shell_exec( "cd {$fashopPath} && php fashop start" );
