
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
	@Prop() private msg!: string;

	counter = 0;

	incrementCounter() {
		this.counter++;
	}
}