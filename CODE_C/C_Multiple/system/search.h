void search() {
	int i;
	char number[20];
	printf("\t\tplease input car to search: ");
	scanf("%s", number);
	for (i = 0; i < n; i++) {
		if (strcmp(number, c[i].num) == 0) {
			printf("\t\tcar[%d] is %s , timein is %d month %d day %d hour %d minute, timeout is  %d day %d hour %d minute\n", i+1, c[i].num, c[i].month, c[i].day, c[i].inh, c[i].inm, c[i].outd, c[i].outh, c[i].outm);
			break;
		}
	}
	if (i >= n) {
		printf("\t\tcar is not existed!");
	}
}
