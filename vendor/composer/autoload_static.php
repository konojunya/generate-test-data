<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit1ef214891647132eddd0bd8ab8c7251d
{
    public static $prefixLengthsPsr4 = array (
        'F' => 
        array (
            'Faker\\' => 6,
        ),
        'A' => 
        array (
            'App\\' => 4,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Faker\\' => 
        array (
            0 => __DIR__ . '/..' . '/fzaninotto/faker/src/Faker',
        ),
        'App\\' => 
        array (
            0 => __DIR__ . '/../..' . '/php_src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit1ef214891647132eddd0bd8ab8c7251d::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit1ef214891647132eddd0bd8ab8c7251d::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}