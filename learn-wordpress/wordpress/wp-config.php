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
define('DB_CHARSET', 'utf8mb4');

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
define('AUTH_KEY',         'ry3[i&E7ch6]8bW5^:+F3Y]!gGFsr|Ss>lzjHV./uh+6Nqa($Z/h2x!WZ`cc#}/o');
define('SECURE_AUTH_KEY',  '`j;-$@CqjiBms1p[DiIUI8;+~S`_m/94,##/g[0KKnh^[;bT2|UWeWN:*s>|Hz!@');
define('LOGGED_IN_KEY',    'v)8-c{ amTD?2XEJmCP{TLd=bm,fx&_PgX6n%SS0TVQ)EfBDzX0E|H)K^G({lv1A');
define('NONCE_KEY',        'W!tg=+JXJ)4/9K27mH([x,e-44}BcvU4#m/f7oJate`Zx-zXoOGS%|a/d$w}^._`');
define('AUTH_SALT',        'sVZ4psC*I^QcM=O0Cuw8%D{B=%)z~Mp$OO/j}<$EUYm0:ERkhru?<<`%+}-k1hAE');
define('SECURE_AUTH_SALT', 'dV(U8iq|s?g]u1i_:2L>:5L1@xr$4XFC$]MjK|9wu*3Nv/653gh75R=y.0BzSeC ');
define('LOGGED_IN_SALT',   'OIqx$<,@d{NW&^@dp,&i1Yl?=weYCXRjTSe315G+D2,}!vKzlO]JgFn*Ed)N[Baz');
define('NONCE_SALT',       'TZJEn%&^*09rT6Q~?5r6K<fY2* lDk]#;>5*+BMS]VoyvQvlU0kD?zJw]xU<Kk93');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'xyz_';

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
