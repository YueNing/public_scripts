function FindProxyForURL(url, host)
{
	if (shExpMatch(host,"*.onion"))
	{
		return "SOCKS 127.0.0.1:9050";
	}
	
	if (shExpMatch(host,"*.i2p"))
	{
		return "PROXY 127.0.0.1:4444";
	}
	if (shExpMatch(host,"*.163.com"))
	{
		return "PROXY 106.14.214.163:21325";
	}
	if (shExpMatch(host,"*.126.com"))
	{
		return "PROXY 106.14.214.163:21325";
	}
	return "DIRECT";
} 
