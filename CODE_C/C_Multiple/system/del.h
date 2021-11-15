void del() {
	int i=0,j,k;
	int m;
	int flag=0;
	char number[20];
	printf("\t\t请输入要删除的车牌号码：");
	scanf("%s",number);
	for(i=0;i<n;i++) { 
		if(strcmp(number,c[i].num)==0) {
			printf("\t\t确认删除？（输入0删除）: ");
			scanf("%d",&m);
			if(m==0) {
				j=i;
				if(j<n-1) {
					for(k=j;k<n-1;k++) {
						c[k]=c[k+1];
					}
				}
				n--;
				flag=1;
				printf("\n\t\t已删除！");
			}
			break;
		}
	}
	if(flag==0&&i>=n) {
		printf("\t\t车辆信息不存在！"); 
	}
}
