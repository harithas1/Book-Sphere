def next_ip(ip):
    split_ip=ip.split(".")
    n=len(split_ip)
    for i in range(n-1,-1,-1):
        if int(split_ip[i])<255:
            split_ip[i]=str(int(split_ip[i])+1)
            return ".".join(split_ip)
print(next_ip("01.02.2552.255"))

