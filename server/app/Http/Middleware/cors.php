<?php

namespace App\Http\Middleware;

use Closure;

class cors
{
	/*Created by Adem Kouki */
	/*See this : http://angularpluslaravel.com/how-to-solve-no-access-control-allow-origin-header-is-present-on-the-requested-resource-error-in-laravel/ */
	public function handle($request, Closure $next) {
		   
			return $next($request)
			  ->header('Access-Control-Allow-Origin', '*')
			  ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
			  ->header('Access-Control-Allow-Headers',' Origin, Content-Type, Accept, Authorization, X-Request-With')
			  ->header('Access-Control-Allow-Credentials',' true');
		}
}
