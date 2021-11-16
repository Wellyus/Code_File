void add() {
	int i = 1;
	do {
		int flag = 0;
		printf("\t\tplease input your car: ");
		scanf("%s", c[n].num);
		
		for (i=0; i < n; i++) {
			if (strcmp(c[n].num,c[i].num) == 0)	{
				printf("\t\terror! already exited\n");
				flag=1;
				break;
			}
		}
		
		if(flag == 0 && i >= n) {
			printf("\t\tinput month, day, hour, minute");
			scanf("%d %d %d %d", &c[n].month, &c[n].day, &c[n].inh,&c[n].inm);
			n++; 	
		}

		printf("\t\tplease input 0 to continue: ");
		scanf("%d", &i); 
	} while(i == 0);
}
