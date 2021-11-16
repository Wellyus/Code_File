void show() {
	FILE *fp;
	if ((fp = fopen("message.txt", "rb")) == NULL) {
		printf("cannot open file!\n");
		exit(1);
	}
	int i;
	printf("\t\there are cars:\n");
	for (i = 0; i < n; i++) {
		printf("\t\tcar[%d] is %s, timein is %2d month %2d day %2d hour %2d minute, timeout is %2d day %2d hour %2d minute\n", i+1, c[i].num, c[i].month, c[i].day, c[i].inh, c[i].inm, c[i].outd, c[i].outh, c[i].outm);
	}
} 


