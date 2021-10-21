def http_error(status):
	match status:
		case 400:
			return "Bad request"
		case 404:
			return "Not fount"
		case _:
			return "aa"
print(http_error(400))