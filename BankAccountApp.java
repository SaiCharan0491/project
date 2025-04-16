import java.util.Scanner;

class BankAccount {
    private final  String accountHolderName;
    private final  String accountNumber;
    private double balance;

    // Constructor
    public BankAccount(String name, String accNumber, double initialBalance) {
        this.accountHolderName = name;
        this.accountNumber = accNumber;
        this.balance = initialBalance;
    }

    // Deposit money
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
        } else {
            System.out.println("Invalid deposit amount.");
        }
    }

    // Withdraw money
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
        } else {
            System.out.println("Insufficient balance or invalid amount.");
        }
    }

    // Get balance
    public double getBalance() {
        return balance;
    }

    // Display account info
    public void displayAccountInfo() {
        System.out.println("\n--- Account Information ---");
        System.out.println("Name: " + accountHolderName);
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Balance: $" + balance);
    }
}

public class BankAccountApp {
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) { 

        // Creating account
        System.out.println("=== Welcome to the Bank ===");
        System.out.print("Enter account holder name: ");
        String name = scanner.nextLine();
        System.out.print("Enter account number: ");
        String accNumber = scanner.nextLine();
        System.out.print("Enter initial deposit amount: ");
        double initialDeposit = scanner.nextDouble();

        BankAccount myAccount = new BankAccount(name, accNumber, initialDeposit);

        int choice;
        do {
            System.out.println("\n--- Menu ---");
            System.out.println("1. Deposit");
            System.out.println("2. Withdraw");
            System.out.println("3. Check Balance");
            System.out.println("4. Display Account Info");
            System.out.println("5. Exit");
            System.out.print("Enter your choice (1-5): ");
            choice = scanner.nextInt();

            switch (choice) {
                case 1 -> {
                System.out.print("Enter deposit amount: ");
                double deposit = scanner.nextDouble();
                myAccount.deposit(deposit);
            }
            case 2 -> {
                System.out.print("Enter withdrawal amount: ");
                double withdraw = scanner.nextDouble();
                myAccount.withdraw(withdraw);
            }
            case 3 -> System.out.println("Current Balance: $" + myAccount.getBalance());
            case 4 -> myAccount.displayAccountInfo();
            case 5 -> System.out.println("Thank you for using our bank. Goodbye!");
            default -> System.out.println("Invalid choice, please try again.");
        }


        } while (choice != 5);

        scanner.close();
    }
    }
}
