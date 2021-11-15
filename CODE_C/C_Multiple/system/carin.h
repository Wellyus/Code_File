void add() {
	int i=1;
	do {
		int flag=0;
			printf("\t\t请输入车牌号码： ");
			scanf("%s",c[n].num);
			for(i=0;i<n;i++) {
				if(strcmp(c[n].num,c[i].num)==0)
				{
					printf("\t\terror! 该车辆信息已录入！\n");
					flag=1;
					break;
				}
			}
			if(flag==0&&i>=n) {
				printf("\t\t请输入进入时间,包含月、日、时、分： ");
				scanf("%d %d %d %d",&c[n].month,&c[n].day,&c[n].inh,&c[n].inm);
				n++; 	
			}
		printf("\t\t是否继续输入？输入0继续输入： ");
		scanf("%d",&i); 
	} while(i==0);
}
