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
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wolpray_wordpress');

/** MySQL database username */
define('DB_USER', 'wolpray');

/** MySQL database password */
define('DB_PASSWORD', '1aBQLxbWIoHP2k0');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'KmfRRT2aez7dZq8Kn8MEM7M30Vb1rNFwuXW65bK6gQISAeyIrm6d8S4i7UoQ3Cvx');
define('SECURE_AUTH_KEY', 'f3a7x5yL1tjGwjKjnfmWuAvRw3zZKfYwtsHRKKA7ZHXw9Ar7VoLkbO0QJoBcXQb1');
define('LOGGED_IN_KEY', 'hy0oidrDcSZfzUg6DfDAha5Y86gHqnpbKj3zthTGIr9Z0fbzvX5Pch7ZikSwvR1o');
define('NONCE_KEY', 'J4AMqJhdeKyv5nmCIjmqQxzBFana6ATtUG863A5PzlilFzM0yhi84PyYhr579yWx');
define('AUTH_SALT', 'mCwvtDg5fj4TNYiriCtzH6vKXILQvGbDjdhHoYJdV4jecNrrq5rjPWaNyVqsHnY3');
define('SECURE_AUTH_SALT', 'tYnGQSC025g3LgAmFMGkHVFgDlo3QHIds4W6TGFe76IgDnXcv1BaQ1Wr4ecEs7Mu');
define('LOGGED_IN_SALT', 'QKgrPXn8qkDyitTxorjkQQa2jHIFyLRoo6PH6Ilpj8oPkv7bxwmtgLDbte0gw5yN');
define('NONCE_SALT', 'OHBeRSlsLEXB3a81jkmRj0FHWDxZglnxBskWqOwXLUD4QQzyfOuwCFLl7s5qhk20');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
