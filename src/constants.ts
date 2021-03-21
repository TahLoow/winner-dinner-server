/**
 * RESTful API Statuses to be used for API responses.
 * See https://restfulapi.net/http-status-codes/ for detailed descriptions.
 */
export const rest_status = {
  continue: 100,						                  // 100 Continue
  switching_protocol: 101,						        // 101 Switching Protocol
  processing_: 102,						                // 102 Processing (WebDAV)
  early_hints: 103,						                // 103 Early Hints
  ok: 200,						                        // 200 OK
  created: 201,						                    // 201 Created
  accepted: 202,						                  // 202 Accepted
  non_authoritative_information: 203,					// 203 Non-Authoritative Information
  no_content: 204,						                // 204 No Content
  reset_content: 205,						              // 205 Reset Content
  partial_content: 206,						            // 206 Partial Content
  multi_status_: 207,						              // 207 Multi-Status (WebDAV)
  already_reported_: 208,						          // 208 Already Reported (WebDAV)
  im_used: 226,						                    // 226 IM Used
  multiple_choices: 300,						          // 300 Multiple Choices
  moved_permanently: 301,						          // 301 Moved Permanently
  found: 302,						                      // 302 Found
  see_other: 303,						                  // 303 See Other
  not_modified: 304,						              // 304 Not Modified
  use_proxy_: 305,						                // 305 Use Proxy (Deprecated)
  unused: 306,						                    // 306 (Unused)
  temporary_redirect: 307,						        // 307 Temporary Redirect
  permanent_redirect_: 308,						        // 308 Permanent Redirect (experimental)
  bad_request: 400,						                // 400 Bad Request
  unauthorized: 401,						              // 401 Unauthorized
  payment_required_: 402,					          	// 402 Payment Required (Experimental)
  forbidden: 403,						                  // 403 Forbidden
  not_found: 404,						                  // 404 Not Found
  method_not_allowed: 405,						        // 405 Method Not Allowed
  not_acceptable: 406,						            // 406 Not Acceptable
  proxy_authentication_required: 407,					// 407 Proxy Authentication Required
  request_timeout: 408,						            // 408 Request Timeout
  conflict: 409,						                  // 409 Conflict
  gone: 410,						                      // 410 Gone
  length_required: 411,						            // 411 Length Required
  precondition_failed: 412,						        // 412 Precondition Failed
  request_entity_too_large: 413,						  // 413 Request Entity Too Large
  request_uri_too_long: 414,						      // 414 Request-URI Too Long
  unsupported_media_type: 415,						    // 415 Unsupported Media Type
  requested_range_not_satisfiable: 416,				// 416 Requested Range Not Satisfiable
  expectation_failed: 417,						        // 417 Expectation Failed
  im_a_teapot_: 418,						              // 418 I’m a teapot (RFC 2324)
  enhance_your_calm_: 420,						        // 420 Enhance Your Calm (Twitter)
  unprocessable_entity_: 422,						      // 422 Unprocessable Entity (WebDAV)
  locked_: 423,						                    // 423 Locked (WebDAV)
  failed_dependency_: 424,						        // 424 Failed Dependency (WebDAV)
  too_early_: 425,						                // 425 Too Early (WebDAV)
  upgrade_required: 426,						          // 426 Upgrade Required
  precondition_required: 428,					      	// 428 Precondition Required
  too_many_requests: 429,						          // 429 Too Many Requests
  request_header_fields_too_large: 431,				// 431 Request Header Fields Too Large
  no_response_: 444,						              // 444 No Response (Nginx)
  retry_with_: 449,						                // 449 Retry With (Microsoft)
  blocked_by_windows_parental_controls_: 450,	// 450 Blocked by Windows Parental Controls (Microsoft)
  unavailable_for_legal_reasons: 451,					// 451 Unavailable For Legal Reasons
  client_closed_request_: 499,						    // 499 Client Closed Request (Nginx)
  internal_server_error: 500,						      // 500 Internal Server Error
  not_implemented: 501,						            // 501 Not Implemented
  bad_gateway: 502,						                // 502 Bad Gateway
  service_unavailable: 503,						        // 503 Service Unavailable
  gateway_timeout: 504,						            // 504 Gateway Timeout
  http_version_not_supported_: 505,						// 505 HTTP Version Not Supported (Experimental)
  variant_also_negotiates_: 506,						  // 506 Variant Also Negotiates (Experimental)
  insufficient_storage_: 507,						      // 507 Insufficient Storage (WebDAV)
  loop_detected_: 508,						            // 508 Loop Detected (WebDAV)
  not_extended: 510,						              // 510 Not Extended
  network_authentication_required: 511,				// 511 Network Authentication Required
}