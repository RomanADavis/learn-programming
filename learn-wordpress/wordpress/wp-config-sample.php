<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'startwordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '@NIq2~O6_T[o]0R49?8^sA|743&3E oA^l:hN_mOEAWdwDC]-9S+*|0wt.+vYyO');
define('SECURE_AUTH_KEY',  '3pIJ&]H|]afXYn2n2fA9wU&dAgp-<Nwz>--|Ik{m&2SxC>>B/ o&NT}RK7v<uIZi');
define('LOGGED_IN_KEY',    '~LVe<<.-+L?EscYSHSzrm*|-j!$Vb-!z>IKGqO7$.PAUL-*6$V?|3D&%o6y8rGJr');
define('NONCE_KEY',        '!+gy!CJ>L|:vIw1FZ_kV~CEB&1`|Nu>KoPNB!iTlBB)V<o)eL5T e6?RFLJyEA1c');
define('AUTH_SALT',        'R6E&O6MW<zJIorB9*ozOQQIDg|5YMn0t)%-p_YdtA+r1_Tyw#/EH6Yby7K5#Cn#Y');
define('SECURE_AUTH_SALT', 'F(.&6.3FaNXcb_)_tf;AAHp-3iO3vkJWgpzc!|V[4/^vT[C-lx=#9|bV4Ozws5Nb');
define('LOGGED_IN_SALT',   '.cZm&?&J:S-3Z{b6;(wX~QbrU8hyq7JTu5yL_%%WU!T(~BPfz{l0a(F-zm(:].+5');
define('NONCE_SALT',       '1pY^:l!6fJSEBi6-=REWQledGDs|L?L-l$2zlaE6+b#r$eq/p&euG2q_H&83@DS]');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'xyz123_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
