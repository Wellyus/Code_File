void modify() {
	int i;
	char number[20];
	printf("\t\tplease input car to modify");
	scanf("%s", number);

	for (i = 0;i < n; i++) {
		if (strcmp(number, c[i].num) == 0) {
			printf("\t\tplease input a new car");
			scanf("%s", c[i].num);
			break;
		}
	}

	if (i >= n) {
		printf("\n\t\tcar not existed!\n");
	}
}
