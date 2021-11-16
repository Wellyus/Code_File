void out() {
	int a = 1;
	int i = 0;
	char number[20];
	do { 
		printf("\t\tplease input your car: ");
		scanf("%s", number);

		for (i = 0; i < n ;i++) { 
			if (strcmp(number, c[i].num) == 0) {
				printf("\t\tplease input day, hour, minute:");
				scanf("%d %d %d", &c[i].outd, &c[i].outh, &c[i].outm);
				break;
			}
		}

		if (i >= n) {
			printf("\t\tcar not in here!\n");
		}
		
		printf("\t\tplease input 0 to continue: ");
		scanf("%d", &a);
	} while(a == 0);
}
